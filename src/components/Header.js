import React, {Component} from 'react';

const logotypeSvg = <svg height="48px" viewBox="0 0 861 250" enable-background="new 0 0 861 250"><style>{".style0{fill:#25303C;}.style1{fill:#9CB53B;}"}</style><path d="M299.8 91.3h-14.4l-.3.8-24.6 67.8h9.1c2.4 0 4.3-.3 5.7-1.3 1.5-1.1 2.3-2.7 3.1-4.8l3.8-10.8h20.7l3.8 10.8c.8 2.2 1.7 3.8 3.2 4.9 1.5 1 3.4 1.3 5.8 1.3h9l-24.9-68.7zm-7.3 18.6c.5 1.8 1 3.9 1.6 5.5l5.1 15h-13.4l5.1-15c.6-1.6 1.2-3.7 1.6-5.5zM192.4 145.6l-1.1.5 1.1-.5-8.4-16.9c-1.1-2.2-2.4-3.5-3.3-4.3.9-.8 2.1-2.2 3.2-4.2l15.9-29h-16.2l-13.7 25.4c-.4.7-.8 1-1.5 1.2-.6.2-1.6.3-2.8.3h-5.9v-19.3c0-2.3-.5-4.3-1.8-5.6-1.4-1.4-3.3-1.9-5.7-1.9h-7.2v68.5h14.8v-28.9h5.1c1.3 0 2.4 0 3.1.3.7.2 1.2.5 1.6 1.3l10.8 21.7c1.1 2.3 2.4 3.8 4.1 4.6 1.7.8 3.7 1 6.2 1h9l-.9-1.8s-5.5-10.5-6.4-12.4zM255.1 91.3h-5.9c-2.3 0-4.3.5-5.7 1.9-1.3 1.4-1.9 3.3-1.9 5.7v20.5h-22v-20.6c0-2.3-.5-4.3-1.8-5.6-1.4-1.4-3.3-1.9-5.7-1.9h-7.1v68.5h14.6v-27.8h22v27.8h14.6v-68.5h-1.1zM380.8 91.3h-5.8c-2.4 0-4.4.5-5.7 1.9-1.3 1.4-1.8 3.3-1.8 5.6v30.3c0 1 0 2.1.1 3.2-.9-1.8-1.9-3.6-3-5.1l-21.8-35.9h-14.1v68.5h7.1c2.4 0 4.3-.5 5.7-1.8 1.4-1.4 1.8-3.3 1.8-5.7v-30.2c0-1 0-2.1-.1-3.2.9 1.8 1.9 3.6 3 5.1l21.9 35.8h14v-68.5h-1.3zM412.7 91.7h7.3l25.8 68.1h-2c-4.8 0-6.2-1-7.9-5.6l-6-16.1h-27l-6.1 16.1c-1.7 4.6-3 5.6-7.8 5.6h-2l25.7-68.1zm15.3 40.4l-9-24.3c-1.2-3.2-2.6-8.8-2.6-8.8h-.2s-1.5 5.6-2.6 8.8l-8.9 24.3h23.3zM529 91.7h7.3l25.8 68.1h-2c-4.8 0-6.2-1-7.9-5.6l-6-16.1h-27l-6.1 16.1c-1.7 4.6-3 5.6-7.8 5.6h-2l25.7-68.1zm15.2 40.4l-9-24.3c-1.2-3.2-2.6-8.8-2.6-8.8h-.2s-1.5 5.6-2.6 8.8l-8.9 24.3h23.3zM678.3 91.7h6.9l18 39.6c1.6 3.5 3.4 8 3.4 8h.2s1.7-4.5 3.3-8l18-39.6h6.9l5.9 68.1h-2c-4.2 0-5.6-1.7-5.9-5.9l-3.2-41.3c-.3-3.7-.3-9.5-.3-9.5h-.2s-1.8 6-3.5 9.5l-16.1 34.4h-6.1l-16.1-34.6c-1.6-3.4-3.6-9.7-3.6-9.7h-.2s0 6-.3 9.7l-3.2 41.3c-.3 4.2-1.7 5.9-5.9 5.9h-1.6l5.6-67.9zM764.4 130.1l-23.7-38.4h2c4.6 0 6.4.7 9.3 5.4l11.5 19.3c2.1 3.6 4.2 7.7 4.2 7.7h.2s2-4.1 4.2-7.7l11.5-19.3c2.9-4.7 4.6-5.4 9.3-5.4h2l-23.7 38.4v29.6h-6.8v-29.6zM496.5 108.2c-2.6-5.6-10-12-20.9-12-15.1 0-26.7 11.8-26.7 28.3 0 16.3 11.5 29.3 27 29.3 7.4 0 13.3-2.5 17-5.2 4.5-3.3 9.2.5 9.2.5s-9.4 11-26.2 11c-19.9 0-34-15.9-34-35.7 0-19.6 14.4-34.7 33.6-34.7 9.7 0 21.6 4.3 26.1 14.6 2.1 4.7 2.4 6.9 2.4 6.9s-5.7.7-7.5-3zM587.4 91.7h-21v62.2c0 4.2 1.7 5.9 5.9 5.9h15.1c20.5 0 34.2-12.4 34.2-34.1-.1-21.6-13.7-34-34.2-34zm-.7 62h-11.4c-1.4 0-2.1-.7-2.1-2.1v-53.9h13.6c16.6 0 27.8 9.9 27.8 28-.1 18.1-11.2 28-27.9 28zM660 153.7h-23.9c-1.4 0-2.1-.7-2.1-2.1v-23.1h25.6v-6h-25.6v-24.8h31.700000000000003v-.1c0-4.2-1.7-5.9-5.9-5.9h-32.6v62.099999999999994c0 4.2 1.7 5.9 5.9 5.9h29.4c4.2 0 5.9-1.7 5.9-5.9v-.1h-8.4z" className="style0"/><path d="M69.2 155.5s-10.8-25.9 8.6-45.3c17.7-17.6 44.3-20.3 48.9-20.4 0 0 7.2 23.5-10.7 50.1-17.8 26.6-42.6 19.4-42.6 19.4s24.4-31.2 21.5-31c-2.1.1-14.9 14.3-25.7 27.2z" className="style1"/></svg>;

const menuSvg = <svg fill="currentColor" width="18px" height="18px" viewBox="0 0 438.533 438.533"><path d="M420.265 328.897h-401.991c-4.952 0-9.235 1.813-12.851 5.428-3.616 3.613-5.423 7.899-5.423 12.847v36.548c0 4.949 1.807 9.23 5.424 12.848 3.619 3.613 7.902 5.424 12.851 5.424h401.991c4.948 0 9.229-1.811 12.847-5.424 3.614-3.617 5.421-7.898 5.421-12.848v-36.548c0-4.948-1.8-9.233-5.421-12.847-3.618-3.614-7.896-5.428-12.848-5.428zM433.112 41.968c-3.617-3.617-7.898-5.426-12.847-5.426h-401.991c-4.952 0-9.235 1.809-12.851 5.426-3.616 3.615-5.423 7.898-5.423 12.845v36.547c0 4.949 1.807 9.229 5.424 12.847 3.619 3.618 7.902 5.424 12.851 5.424h401.991c4.948 0 9.229-1.807 12.847-5.424 3.614-3.617 5.421-7.898 5.421-12.847v-36.547c-.001-4.947-1.805-9.23-5.422-12.845zM420.265 182.72h-401.991c-4.952 0-9.235 1.809-12.851 5.426-3.616 3.615-5.423 7.898-5.423 12.846v36.547c0 4.948 1.807 9.236 5.424 12.847 3.619 3.614 7.902 5.428 12.851 5.428h401.991c4.948 0 9.229-1.813 12.847-5.428 3.614-3.61 5.421-7.898 5.421-12.847v-36.547c0-4.948-1.807-9.231-5.421-12.847-3.618-3.617-7.896-5.425-12.848-5.425z"/></svg>;

const searchSvg = <svg fill="currentColor" width="18px" height="18px" viewBox="0 0 475.084 475.084"><path d="M464.524 412.846l-97.929-97.925c23.6-34.068 35.406-72.047 35.406-113.917 0-27.218-5.284-53.249-15.852-78.087-10.561-24.842-24.838-46.254-42.825-64.241-17.987-17.987-39.396-32.264-64.233-42.826-24.845-10.565-50.874-15.847-78.092-15.847-27.216 0-53.247 5.282-78.085 15.847-24.842 10.562-46.254 24.839-64.241 42.826-17.989 17.987-32.264 39.403-42.827 64.241-10.564 24.841-15.846 50.869-15.846 78.087 0 27.216 5.282 53.238 15.846 78.083 10.562 24.838 24.838 46.247 42.827 64.234 17.987 17.993 39.403 32.264 64.241 42.832 24.841 10.563 50.869 15.844 78.085 15.844 41.879 0 79.852-11.807 113.922-35.405l97.929 97.641c6.852 7.231 15.406 10.849 25.693 10.849 9.897 0 18.467-3.617 25.694-10.849 7.23-7.23 10.848-15.796 10.848-25.693.003-10.082-3.518-18.651-10.561-25.694zm-173.161-121.488c-25.029 25.033-55.148 37.549-90.364 37.549-35.21 0-65.329-12.519-90.36-37.549-25.031-25.029-37.546-55.144-37.546-90.36 0-35.21 12.518-65.334 37.546-90.36 25.026-25.032 55.15-37.546 90.36-37.546 35.212 0 65.331 12.519 90.364 37.546 25.033 25.026 37.548 55.15 37.548 90.36 0 35.216-12.519 65.331-37.548 90.36z"/></svg>;

export default class Header extends Component {
  render() {
    const outerStyle = {
      boxShadow: '0 0 10px rgba(0,0,0,0.3)',
      position: 'relative',
      top: 0,
      lineHeight: '45px',
      height: '45px'
    };
    const kaLinkStyle = {
      color: '#444',
      paddingLeft: '4px',
      position: 'relative',
      top: '-1px' // vertically center in parent
    };
    const buttonStyle = {
      borderLeft: '1px solid #ddd',
      color: '#999',
      float: 'right',
      textAlign: 'center',
      lineHeight: '55px',
      width: '45px',
    };
    return (
      <div className="clearfix" style={outerStyle}>
        <nav style={{float:'left'}}>
        <a href="/" style={kaLinkStyle}>{logotypeSvg}</a>
        </nav>
        <div style={{float:'right'}}>
        <a href="#" style={buttonStyle} title="Menu">{menuSvg}</a>
        <a href="/search" style={buttonStyle} title="Search">{searchSvg}</a>
        </div>
      </div>
    );
  }
}
