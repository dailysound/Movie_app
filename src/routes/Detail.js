import React from "react";

class Detail extends React.Component{
    componentDidMount(){  //Detail 컴포넌트가 마운트되면
        const {location, history} = this.props; // 구조분해할당으로 location, state를 얻고

        if(location.state === undefined){  //location.state가 없는 경우
            history.push('/');  //Home으로 이동
        }
    }

    render(){
        const {location} = this.props;
        if(location.state){
            return <span>{location.state.title}</span>;
        } else{
            return null;
        }
    }
}

export default Detail;