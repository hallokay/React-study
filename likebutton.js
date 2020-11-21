
// const e = React.createElement;
//태그를 만드는 함수 생략가능

 //react안에 컴포넌트가 들어있다 그것을 상속을 받아옴(extends)
class LikeButton extends React.Component{
    //class에는 기본적으로 constructor가 잇다 애네는 기본적으로 그냥 있는것
    constructor(props){
        super(props);

        //상태는 바뀌는 부분 바귈수 있는 부분 state-- 버튼을 눌렀으므로 상태는 변화해있다.
        this.state = {
            Liked: false,
        };
        //기본 상태
    }

    //좋아요버튼을 어떻게 화면에 표시할 것인지를 결정해주는 메서드
    render(){
        
        return <button type='submit' onClick={() =>{ this.setState({Liked: true})}}>
                    {/*이부분에 자바스크립트 기능들어감 */}
                    {this.state.Liked === true ? '좋아요' : 'Like'}
                </button>
                //이런 코드를 JSX라고함 (JS + XML)
        
        
        // return e(
        //     'button', 
        //     {onClick: () => { this.setState({ Liked: true })}, type: 'submit'},
        //     this.state.Liked === true ? 'Liked': 'Like');
       
            //('만들 태그 이름', 태그의 기능 속성, 안에 들어갈 내용)
        //<button>Like</button> 버튼 안에 라이크가 있는 태그를 만들겠다.하는것
        //만들었다가 아님... 예정

        //setState로 상태의 속성을 변화시킬수 있음


    }

}



// ReactDOM이 만들겠다한것을 웹에다 실제로 구현을 해줌--실제로 되는것

// ReactDOM.render(e(LikeButton), document.querySelector('#root')); ---구형 바벨 쓰기전

ReactDOM.render(
    <div>
        {/* 대문자로 만든태그는 리액트 컴포넌트다!  */}
        <LikeButton />
        <LikeButton />
        <LikeButton />
        <LikeButton />
        <LikeButton />
        </div>, 
    document.querySelector('#root')
    );

// div로 감싸주면 여러개 버튼 생성 가능 만약 버튼안에 글자를 바꾸고 싶으면 class render로 버튼의 자스들어가는 부분 가서 바꾸면됨
