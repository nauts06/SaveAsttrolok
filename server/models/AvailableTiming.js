const mongoose = require("mongoose");
const AstrologerModel = require("./AstrologerModel");

const availableTimingSchema = mongoose.Schema({
    day: { type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],require:true },
    startTime: { type: String, min: 0, max: 23, required: true, default:00}, // hour of the day
    endTime: { type: String, min: 0, max: 23, required: true, default:00 }, // hour of the day
    lunchTimeIn: { type: String, min: 0, max: 23, required: true, default:00 },
    lunchTimeOut: { type: String, min: 0, max: 23, required: true, default:00 },
    teaTimeIn: { type: String, min: 0, max: 23, required: true , default:00},
    teaTimeOut: { type: String, min: 0, max: 23, required: true , default:00},
    bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: "AstrologerModel" }, // optional reference to the user who booked the slot
    // other fields as needed  
})

module.exports = mongoose.model("AvailableTimingSchema", availableTimingSchema);

