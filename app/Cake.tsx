import * as React from "react";

interface CakeProps extends React.Props<any> {
    name: string;
    description?: string;
    date?: Date;
}

class Cake extends React.Component<CakeProps, void> {
    render() {
        return (
            <div>
                {this.props.name} ({this.props.date.toDateString()})
            </div>
        );
    }
}

export {
    CakeProps,
    Cake
};