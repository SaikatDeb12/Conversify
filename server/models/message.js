import { Schema, model } from "mongoose";

const messageSchema = new Schema(
    {
        body: {
            type: String,
        },
        image: {
            type: String,
        },
        seen: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        conversationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "conversation",
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        replyMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
    },
    { timestamps: true },
);

const Message = model("Message", messageSchema);

export { Message };
