import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// TODO: 도감 사이트에서 데이터 가져오기
// TODO: 영문 이름 검색

class IVSearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.state = {keyword: ""};
    }

    handleKeywordChange(e) {
        this.setState({keyword: e.target.value});
    }

    render() {
        const keyword = this.state.keyword;

        return (
            <div>
                <h1>포고 레벨별 IV 검색</h1>
                <IVSearchMenu keyword={keyword}
                              onKeywordChange={this.handleKeywordChange}/>
                <IVSearchResult keyword={keyword}/>
            </div>
        );
    }
}

class IVSearchMenu extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onKeywordChange(e);
    }

    render() {
        const keyword = this.props.keyword;

        return (
            <form>
                <input type="text" value={keyword}
                       onChange={this.handleChange}/>
            </form>
        );
    }
}

// TODO: 레벨별 결과를 리스트로 출력

class IVSearchResult extends React.Component {
    render() {
        const keyword = this.props.keyword;

        return (
            <div>{keyword}</div>
        );
    }
}

// ========================================

ReactDOM.render(
    <IVSearch/>,
    document.getElementById("root")
);
