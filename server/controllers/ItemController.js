import ItemModel from "../models/ItemModel.js";

// Add an item
const addItem = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'Image file is required' });
        }

        const item = new ItemModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: req.file.path.replace(/\\/g, "/") // Ensure forward slashes for URLs
        });

        await item.save();
        return res.status(201).json({ success: true, message: 'Item added successfully', data: item });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Failed to add item' });
    }
};

// Get all items
const getItem = async (req, res) => {
    try {
        const items = await ItemModel.find({});
        return res.status(200).json({ success: true, data: items });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Failed to fetch items' });
    }
};

export { addItem, getItem };
