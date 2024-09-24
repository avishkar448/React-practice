import Order from "../models/orderModel.js";

const getTotalSales = async (req, res) => { 
    const {_id,total_price_set}=req.body;
    try { 
        const orders = await Order.find({}).limit(2);
        res.status(200).send({
            success: true,
            message: "All Orders fetched successfully",
            orders,
        });
    } catch (error) { 
        console.error(error);  // Better to use console.error for logging errors
        res.status(500).send({ 
            success: false,
            message: "Error in getting orders",
            error: error.message,
        });
    }
};

export { getTotalSales };
