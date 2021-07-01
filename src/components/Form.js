import React, {useState} from "react";
import {Button} from "antd";

function Form(props) {
  const [name, setName] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    if(name.trim() === ""){
      alert("名稱不能為空");
      return;
    }
    props.addTask(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      <Button type="primary" htmlType="submit" className="btn btn__primary btn__lg">
        Add
      </Button>
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  )
}

export default Form;