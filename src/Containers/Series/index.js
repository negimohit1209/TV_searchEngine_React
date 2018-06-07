import React , {Component} from 'react';
import Serieslist from '../../Components/Serieslist'
import Loader from '../../Components/Loader'
import INTRO from '../../Components/Intro'
class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFetching: false
      }
    
    onSeriesInputChange = e => {
        this.setState({ seriesName: e.target.value, isFetching: true})
        
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then((response) => response.json())
        .then(json => this.setState( { series: json, isFetching: false } ))
    }

    render(){
        const { series, seriesName , isFetching} = this.state;
        return (
            <div>
                <INTRO message="Here you can find all of your most loved series"/>
            <div>
                <input value={seriesName} 
                type="text" 
                onChange={this.onSeriesInputChange} />
            </div>
            { 
                !isFetching && series.length === 0 && seriesName.trim() === ''
                &&
                <p>Please enter TV series name in the above text field. </p>
            }
            {
                !isFetching && series.length === 0 && seriesName.trim() !== ''
                &&
                <p>No TV series are found with this name</p>
            }
            {
                isFetching && <Loader />
            }
            {
                !isFetching && <Serieslist list= {this.state.series}/>
            }
            
            </div>

        )
    }
}


export default Series;