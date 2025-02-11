import React, { Component } from 'react';
import './calculator.css';
import Button from '../components/button';
import Display from '../components/display';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
};

export default class Calculator extends Component {
    state = { ...initialState };

    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory() {
        this.setState({ ...initialState });
    }

    // Função auxiliar para realizar os cálculos sem usar eval
    calculate(value1, value2, operation) {
        switch (operation) {
            case '+': return value1 + value2;
            case '-': return value1 - value2;
            case '*': return value1 * value2;
            case '/': return value2 === 0 ? 0 : value1 / value2; // Previne divisão por zero
            default: return value1;
        }
    }

    setOperation(operation) {
        const { current, clearDisplay, values, operation: currentOperation } = this.state;

        if (current === 0) {
            this.setState({
                operation,
                current: 1,
                clearDisplay: true
            });
        } else {
            if (clearDisplay) {
                this.setState({ operation });
                return;
            }

            const result = this.calculate(values[0], values[1], currentOperation);
            const equals = operation === '=';

            this.setState({
                displayValue: String(result),
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: true,
                values: [result, 0]
            });
        }
    }

    addDigit(digit) {
        if (digit === '.' && this.state.displayValue.includes('.')) {
            return;
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + digit;

        this.setState({ displayValue, clearDisplay: false });

        if (digit !== '.') {
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({ values });
        }
    }

    render() {
        return (
            <div className='calculator'>
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />
            </div>
        );
    }
}
