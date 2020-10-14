import React from 'react';
import ChoroplethMap from '../ChoroplethMap';


class Map extends React.Component {
    state = {
    data: [
      ["AI", 10], ["AS", 43], ["AB", 50], ["AL", 20], ["AP", 21], ["AM", 43],
      ["AH", 21], ["AN", 19], ["AG", 60], ["AB", 4], ["AD", 44], ["AV", 38],
      ["BR", 67], ["FI",20]],
    }
    render() {
    return (
      <div style={{
        height:"100vh",
        width: "100vw"
      }}>
        <ChoroplethMap data={this.state.data}/>
      </div>
    );
  }
}
export default Map;
