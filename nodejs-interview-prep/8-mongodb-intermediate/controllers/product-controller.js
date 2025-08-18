const Product = require('../models/Product')


// aggregation pipeline: aggregate mean sum by basic means , but here when we run 2 or multiple query and at a sme tiem , liek sorting , group document and other query than we use the aggreation


const getProductStats = async (req,res)=>{
    try {
// 1.filter condition , filter the product where in stock is true and price >100
//2.group the documents : group by category an dthan calculat eteh avg price of the category and length of the data of each category

const result = await Product.aggregate([
    //first condition
    {
        $match: {
            inStock:true,
            price:{
                $gte:10
            }
        }
    },
    {
        $group:{
            _id:"$category",   // grouping by category , here is teh key name $+ key name and key will be _id
            avgPrice:{
                $avg:"$price"
            },
            count:{
                $sum:1
            }
        }
    }
    // second condition
])

res.status(200).json({
    success:true,
    data:result
})
        
    } catch (error) {
         console.log(error)
        res.status(500).json({
            success:false,
            msg:"Some Error Occured"
        })
    }
}


const getProductAnalysis = async(req,res)=>{
    try {
        const result = await Product.aggregate([
            {
                $match:{
                    category:'Electronics'
                }
            },
            {
                $group:{
                    _id:null,
                    totalRevenue:{
                        $sum:'$price'
                    },
                    averagePrice:{
                        $avg:"$price"
                    },
                    maxProductPrice:{
                        $max:'$price'   // give the maxium price ofteh product
                    },
                    minProductPrice:{
                        $min:'$price'
                    }
                }
            },
            //project operator 
            {
                $project:{
                    _id:0,  // if we give 0 menas from above grupop propert do yoou wan ashow it or not like this is teh means ing we give 0 tah nit siwll not show  
                    totalRevenue:1,
                    averagePrice:1,
                    maxProductPrice:1,
                    minProductPrice:1,
                    priceRange:{
                        $subtract:['$maxProductPrice','$minProductPrice']
                    }
                }
            }
        ])

        res.status(200).json({
            success:true,
            data:result
        })
    } catch (error) {
          console.log(error)
        res.status(500).json({
            success:false,
            msg:"Some Error Occured"
        })
        
    }
}
const insertSampleProducts = async (req,res)=>{
    try {
         const sampleProducts = [
      {
        name: "Laptop",
        category: "Electronics",
        price: 999,
        inStock: true,
        tags: ["computer", "tech"],
      },
      {
        name: "Smartphone",
        category: "Electronics",
        price: 699,
        inStock: true,
        tags: ["mobile", "tech"],
      },
      {
        name: "Headphones",
        category: "Electronics",
        price: 199,
        inStock: false,
        tags: ["audio", "tech"],
      },
      {
        name: "Running Shoes",
        category: "Sports",
        price: 89,
        inStock: true,
        tags: ["footwear", "running"],
      },
      {
        name: "Novel",
        category: "Books",
        price: 15,
        inStock: true,
        tags: ["fiction", "bestseller"],
      },
    ];
        

    const result = await Product.insertMany(sampleProducts)


    res.status(201).json({
        success:true,
        data:`Inserted ${result.length} sample product pushed`
    })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            msg:"Some Error Occured"
        })
        
    }
}

module.exports ={
    insertSampleProducts,
    getProductStats,
    getProductAnalysis
}