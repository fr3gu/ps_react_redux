import React from "react"

interface ILoadingDotsProps {
    interval: number;
    dots: number;
}

interface ILoadingDotsState {
    frame: number;
}

export default class LoadingDots extends React.Component<ILoadingDotsProps, ILoadingDotsState> {
    interval: NodeJS.Timer;
    isCancelled: boolean;

    constructor(props: any) {
        super(props);
        const self = this;

        self.state = {
            frame: 1
        }

        self.isCancelled = false;
    }

    public static defaultProps: Partial<ILoadingDotsProps> = {
        interval: 300,
        dots: 20
    };

    componentWillUnmount() {
        const self = this;
        self.isCancelled = true;
    }

    componentDidMount() {
        const self = this;
        self.interval = setInterval(() => {
            if(!self.isCancelled) {
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
        let dots = self.state.frame % (self.props.dots + 1);
        let text = "";
        while(dots > 0) {
            text += ".";
            dots--;
        }
        return <span {...self.props}>{text}&nbsp;</span>
    }
}