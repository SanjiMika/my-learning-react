import React from "react";

function logProps(Component) {
    class LogProps extends React.Component {
        componentDidUpdate(prevProps) {
            console.log('Anciennes props :', prevProps);
            console.log('Nouvelles props :', this.props);
        }

        render() {
            const {forwardedRef, ...rest} = this.props;

            // Affecte la prop personnalisée "forwardedRef" en tant que ref
            return <Component ref={forwardedRef} {...rest} />;
        }
    }

    // Remarquez le deuxième paramètre `ref` fourni par `React.forwardRef`.  Nous
    // pouvons le passer à LogProps comme une prop normale, par exemple
    // `forwardedRef`. Et il peut ensuite être attaché au composant.
    return React.forwardRef((props, ref) => {
        return <LogProps {...props} forwardedRef={ref} />;
    });
}

export default logProps;
