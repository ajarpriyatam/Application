import React,{Component, component} from 'react';

class Counter extends Component {
    // styles = {
    //     fontSize:50,
    //     fontWeight:'bold'
    // }
    // renderList(){
    //     if(this.state.tag.length===0){
    //         return "there is no Tag";
    //     }
    //     return <ul>{this.state.tag.map(tag=> <li key={tag}>{tag}</li> )}</ul>
    // }
    // handleIncrement = ()=>{
    //     this.setState({count:this.state.count+1});
    // }
    // handleIncrement = (product)=>{
    //     console.log(product)
    //     this.setState({value:this.state.value+1});
    // }
    render(){
        return (
            // <React.Fragment>
            //     <span style={this.styles} className='badge badge-primary m-2'>{this.formatCount()}</span>
            //     <button style={{fontSize:20}} className='btn btn-secondary btn-sm'>Increament</button>
            // </React.Fragment>
            // <React.Fragment>
            //     {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            //     <button className='btn btn-secondary btn-sm'>Increament</button> */}
            //     <ul>
            //         {/* {this.renderList()} */}
            //         {this.state.tag.length===0 && "There is No Tag"}
            //         <ul>{this.state.tag.map(tag=> <li key={tag}>{tag}</li> )}</ul>
            //        {/* { this.state.tag.map(tag=> <li key={tag}>{tag}</li> )} */}
            //     </ul>
            // </React.Fragment>
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {/* <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increament</button> */}
                {/* <button onClick={()=>this.handleIncrement({id:1})} className='btn btn-secondary btn-sm'>Increament</button> */}
                <button onClick={()=>this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increament</button>
                <button onClick={()=>this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
            </div>

        )
    }
    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value===0?"warning":"primary";
        return classes;
    }
    formatCount(){
        const {value }= this.props.counter;
        return value ===0 ? "zero":value;
    }
}
export default Counter;