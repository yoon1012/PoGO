import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class IVSearch extends React.Component {
    render() {
        return (
            <div>
                <h1>포고 레벨별 IV 검색</h1>
                <IVSearchMenu/>
                <IVSearchResult/>
            </div>
        );
    }
}

class IVSearchMenu extends React.Component {
    // 검색 버튼
    // 라디오 버튼 옵션 변경

    render() {
        return (
            <form>
                <div className="iv-search-bar">
                    <input/>
                    <button>검색</button>
                </div>
                <div className="iv-search-option">
                    <input type="radio" name="type" value="15"/>15레벨
                    <input type="radio" name="type" value="20" checked/>20레벨
                    <input type="radio" name="type" value="25"/>25레벨
                    <input type="radio" name="type" value="30"/>30레벨
                    <input type="radio" name="type" value="35"/>35레벨
                </div>
            </form>
        );
    }
}

class IVSearchResult extends React.Component {
    render() {
        return (
            <div>검색 결과</div>
        );
    }
}

// ========================================

ReactDOM.render(
    <IVSearch/>,
    document.getElementById('root')
);
