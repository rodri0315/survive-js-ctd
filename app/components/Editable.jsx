import React from 'react'

export default ({editing, value, onEdit, ...props}) => {
  if(editing) {
    return <Edit  value={value}
                  onEdit={onEdit}
                  {...props} />;
  }

  return <span {...props} > {value} </span>;
}

class Edit extends React.Component {
  render() {
    // Ask about how this destructures?!? 
    const {value, onEdit, ...props} = this.props;

    return <input type="text" 
                  autoFocus={true} 
                  defaultValue={value} // value is the task
                  onBlur={this.finishEdit} 
                  onKeyPress={this.checkEnter} 
                  {...props} />;
  } // end render()

  // how are this methods different?? but do the same job??
  checkEnter = (e) => {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  } // end checkEnter
  finishEdit = (e) => {
    const value = e.target.value;
    if(this.props.onEdit) {
      this.props.onEdit(value);
    }
  } // end finishEdit

}

// const Edit = ({ onEdit=() =>{}, value, ...props }) => (

//   <div onClick={onEdit} {...props} >
//     <span>edit: {value}</span>
//   </div>
// );