import React from "react";

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
));

class FragmentFancyButton extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        console.log('ref DOM', this.ref.current);
    }

    render() {
        return (
            // Vous pouvez maintenant obtenir une ref directement attachée au bouton DOM :
            <FancyButton ref={this.ref}>Cliquez ici</FancyButton>
        )
    };
}

export default FragmentFancyButton;
