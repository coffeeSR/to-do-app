const subtaskModel = require('./subtask.model');
const Model = require('./subtask.model');

// CRUD

const create = (payload) => {
    return subtaskModel.create(payload);
};
    
const list = () => {
    //complex aggregation
    return SubtaskModel.list();
};



const getById= (id) => {
    return SubtaskModel.findone({ _id:id });
};


const updateByID = (id, payload) => {
    return SubtaskModel.updateOne({ _id: id }, payload);
};

const remove = (id) => {
    return SubtaskModel.deleteOne({ _id:id });
};

module.exports= {create, list, getById, updateByID, remove}