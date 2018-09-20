import React from 'react';

export class Movie extends React.Component {
    constructor(props) {
        super(props)
    }

    movieTittle = this.props.year + ' ' + this.props.genre + ' ' + this.props.tittle;

    render() {
        return (
            <div>
                <div> {this.movieTittle}</div>
                <div> {this.props.description}</div>

            </div>

        )
    }
}