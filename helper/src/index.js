import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// TODO: 도감 사이트에서 데이터 가져오기
// TODO: 영문 이름 검색

class IVSearch extends React.Component {
    render() {
        return (
            <div>
                <h1>포고 레벨별 IV 검색</h1>
                <IVSearchMenu/>
                <IVSearchResult name="검색 결과"/>
            </div>
        );
    }
}

class IVSearchMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" value="검색"/>
            </form>
        );
    }
}

// TODO: 레벨별 결과를 리스트로 출력
// TODO: 버튼 없이도 결과를 출력하기

class IVSearchResult extends React.Component {
    render() {
        return (
            <div>{this.props.name}</div>
        );
    }
}

// ========================================

ReactDOM.render(
    <IVSearch/>,
    document.getElementById('root')
);
