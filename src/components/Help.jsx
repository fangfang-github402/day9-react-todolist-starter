import './Help.css'
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
const Help = () => {
    return (
        <div className="help-page">
            <h1>Help Page</h1>
            <p>Welcome to the TodoList Help Page!</p>
            <h2>How to Use</h2>
            <ol>
                <li>
                    <strong>Add a New Todo:</strong> Type in your task and click on the "+" button to save it.
                </li>
                <li>
                    <strong>Mark a Todo as Complete:</strong> Click on the text to mark it as complete. A line will appear through the text indicating it is done.
                </li>
                <li>
                    <strong>Edit a Todo:</strong> Click on the <EditOutlined /> button next to the todo item to edit it. Change the text and click "ok" to save. If you click "cancel", the changes will not be saved.
                </li>
                <li>
                    <strong>Delete a Todo:</strong> Click on the <DeleteOutlined /> button next to the todo item to delete it.
                </li>
                <li>
                    <strong>View the Done List:</strong> Click on the "done list" navigation to view all completed todos.
                </li>
            </ol>
            <p>If you encounter any issues that persist, please contact support.</p>
        </div>
    );
};

export default Help;