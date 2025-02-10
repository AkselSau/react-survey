export default function RadioButtons({handleChange, formData}) {
    return (
    <ul>
        <li>
            <input id="color-one" type="radio" name="colour" value="1" onChange={handleChange} checked={formData.colour === "1"}/>
            <label htmlFor="color-one">1</label>
        </li>
        <li>
            <input id="color-two" type="radio" name="colour" value="2" onChange={handleChange} checked={formData.colour === "2"}/>
            <label htmlFor="color-two">2</label>
        </li>
        <li>
            <input id="color-three" type="radio" name="colour" value="3" onChange={handleChange} checked={formData.colour === "3"}/>
            <label htmlFor="color-three">3</label>
        </li>
        <li>
            <input id="color-four" type="radio" name="colour" value="4" onChange={handleChange} checked={formData.colour === "4"}/>
            <label htmlFor="color-four">4</label>
        </li>
    </ul>
    )
}