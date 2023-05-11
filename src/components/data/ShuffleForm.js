import React, { useState } from 'react'

const ShuffleForm = () => {
    const [state,setState] = useState({"1":0})
    const onChange = (e) => {
        e.preventDefault()
        setState({...state,[e.target.name]:e.target.value})
        console.log(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(...state)
    }
    return(<form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">weekly average price</label>
          <input type="number" step="0.01" name="1" class="form-control"/>
          <div id="inputhelp" onChange={onChange} class="form-text"></div>
        </div>
        <button type="submit" onSubmit={onSubmit} class="btn btn-primary">Submit</button>
      </form>
    )
}

export default ShuffleForm