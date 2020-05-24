import * as React from "react";
import './styles/top_header.less';

export class TopHeader extends React.Component<{}, {}> {
    render() {
        return (
            <div className='top-header-inner' >
                <i className='logo'></i>
                <div className='top-name'>前端小白</div>
            </div>
        )
    }
}
