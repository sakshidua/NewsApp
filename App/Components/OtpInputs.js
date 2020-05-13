import React from 'react';
import { StyleSheet,Dimensions} from 'react-native';
import { Content, Item, Input, View } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height

class OtpInputs extends React.Component {
    state={otp:[]};
    otpTextInput = [];

    componentDidMount() {
        this.otpTextInput[0]._root.focus();
    }

    renderInputs() {
        const inputs = Array(4).fill(0);
        const txt = inputs.map(
            (i, j) => <Col key={j} style={styles.txtMargin}><Item regular>
                <Input
                    style={[styles.inputRadius, { borderRadius: 10 }]}
                    keyboardType="numeric"
                    onChangeText={v => this.focusNext(j, v)}
                    onKeyPress={e => this.focusPrevious(e.nativeEvent.key, j)}
                    ref={ref => this.otpTextInput[j] = ref}
                />
            </Item></Col>
        );
        return txt;
    }

    focusPrevious(key, index) {
        if (key === 'Backspace' && index !== 0)
            this.otpTextInput[index - 1]._root.focus();
    }

    focusNext(index, value) {
        if (index < this.otpTextInput.length - 1 && value) {
            this.otpTextInput[index + 1]._root.focus();
        }
        if (index === this.otpTextInput.length - 1) {
            this.otpTextInput[index]._root.blur();
        }
        const otp = this.state.otp;
        otp[index] = value;
        this.setState({ otp });
        // this.props.getOtp(otp.join(''));
    }


    render() {
        return (
            <View style={{width:deviceWidth,height:85}}>
            <Content padder>
                <Grid style={styles.gridPad}>
                    {this.renderInputs()}
                </Grid>
            </Content>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gridPad: {marginTop:30},
    txtMargin: { backgroundColor:'#E6E6E6',width:40,height:40,marginRight:20 },
    inputRadius: { textAlign: 'center' ,borderColor:'#728FDE',width:40,height:38}
});

export default OtpInputs;