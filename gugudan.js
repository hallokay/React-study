
//클래스 안에 렌더가 들어감


//변할 것들을 스테이트로 만들어준다
//변할것들 자리에 스테이트로 만든것을 넣어준다
//인풋 주의 글자칠때마다 onchange로 인풋안에 벨류를 바꿔줘야함 -- 
//value: e.target.value 벨류는 내가 타겟으로 넣은 벨류로 한다는 함수  넣어주기

//onSubmit onClick onChange--이런애들 함수로 뺄수 있다 {this.함수 이름}이렇게 넣어줌

//onsubmit
//답이 맞으면 결과로 정답나와야하고 새로운 랜덤숫자로 구구단 만들어야하고 내가 값을입력할 창 비워줘야해
//땡이면 결과로 땡 나오고 값을 다시칠수 있게 비워줘야해

//모든 바뀌는 부분은 함수한에서 변경되어야 함 함수안에서 바꾸면 전체가 바뀌게



class Gugudan extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {}
    //실무에선 이거 안쓰고 바로 스테이트씀

        state = {
            first: Math.ceil(Math.random() * 9),
            second: Math.ceil(Math.random() * 9),
            value: '',
            //내가 넣을 값
            result: '',
        }
        //바뀔 부분들 정해놓음 
    // }

    //따로 뺸 함수는 무조건 에로우 펑션을 쓴다 function(){}쓰면 안댐--하지만 렌더 안에서는 써도대
    onSubmit = (e) => {
        e.preventDefault();
        //구구단 로직이 들어감
        if(parseInt(this.state.value) === this.state.first * this.state.second){
            this.setState({
                result: '정답' + this.state.value,
                first: Math.ceil(Math.random() * 9),
                second: Math.ceil(Math.random() * 9),
                value: '',
                //답이 맞으면 결과로 정답나와야하고 새로운 랜덤숫자로 구구단 만들어야하고 내가 값을입력할 창 비워줘야해
            });
        } else {
            this.setState({
                result: '떙',
                value: ''
                //땡이면 결과로 땡 나오고 값을 다시칠수 있게 비워줘야해
            });  
        }
    };


    onChange = (e) => {
        this.setState({value: e.target.value})
    };
    

    render(){
        return (
            <React.Fragment>
                <div>{this.state.first} 곱하기{this.state.second}은?</div>
                {/* 태그안에 중괄호에는 자스를 쓸수 있다 */}


                <form onSubmit={this.onSubmit}>
                    {/* form을 제출했을때 어찌되는지 */}

                    <input type="number" value={this.state.value} onChange={this.onChange}/>
                    {/* 싱글태그는 닫는거 꼭 value에 자스를 쓰고싶다면 {}에다쓰기 */}
                    {/*<input onChange=(e)=>{console.log(e.target.value)}> 이렇게하면 콘솔에 뭐치는지 표기됨 그걸 리액트 코드로 변환한것 */}
                    {/* 이런식으로 onChange 안해주면 상태가 안바뀜 */}
                    <button>입력!</button>
                </form>
                <div>{this.state.result}</div>
            </React.Fragment>
        );
    }
}
//클래스 전체 괄호


ReactDOM.render(<Gugudan />, document.querySelector('#root'));