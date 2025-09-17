const blogSchema = require('../../../models/blog.model');

const addBlog = async (req, res) => {
    try {
        const blog = await blogSchema.create(req.body);
        res.status(200).json({ blog });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
