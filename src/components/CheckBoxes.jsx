/* eslint-disable react/no-unescaped-entities */
export default function CheckBoxes({handleChange, formData}) {
    return (
    <ul>
        <li>
            <label>     
            <input
            name="swimming"
            type="checkbox"
            value="swimming"
            onChange={handleChange}
            checked={formData.swimming}
            />Swimming</label>
        </li>
        <li>
            <label>
            <input 
            name="bathing" 
            type="checkbox" 
            value="bathing" 
            onChange={handleChange}
            checked={formData.bathing}
            />Bathing</label>
        </li>
        <li>
            <label>
            <input
            name="chatting"
            type="checkbox"
            value="chatting"
            onChange={handleChange}
            checked={formData.chatting}
            />Chatting</label>
        </li>
        <li>
            <label><input name="noTime" type="checkbox" value="noTime" onChange={handleChange} checked={formData.noTime}/>I don't like to spend time with it</label>
        </li>
    </ul>
    )
}