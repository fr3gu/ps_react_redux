import React from "react";

interface IProgressBarProps {
    interval: number;
    scale?: number;
}

interface IProgressBarState {
    frame: number;
}

export default class ProgressBar extends React.Component<IProgressBarProps, IProgressBarState> {
    interval: NodeJS.Timer;
    isCancelled: boolean;

    constructor(props: any) {
        super(props);
        const self = this;

        self.state = {
            frame: 1
        };

        self.isCancelled = false;
    }

    public static defaultProps: Partial<IProgressBarProps> = {
        interval: 300,
        scale: 20
    };

    componentWillUnmount() {
        const self = this;
        self.isCancelled = true;
    }

    componentDidMount() {
        const self = this;
        self.interval = setInterval(() => {
            if (!self.isCancelled) {
                self.setState(prevState => ({
                    frame: prevState.frame + 1
                }));
            }
        }, self.props.interval);
    }

    componentWillMount() {
        const self = this;
        clearInterval(self.interval);
    }

    render() {
        const self = this;
        const dots = self.state.frame % (self.props.scale + 1);
        const percent = (100 / self.props.scale) * dots;
        // let text = "";
        // while(dots > 0) {
        //     text += ".";
        //     dots--;
        // }

        return (
            <div id="progress">
                <div id="bar" style={{ width: percent + "%" }}>&nbsp;</div>
            </div>
        );
    }
}
