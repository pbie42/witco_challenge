import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AppBar from './src/components/AppBar';
import Header from './src/components/Header';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#DC0A2D',
	},
};

const App = () => {
	return (
		<PaperProvider theme={theme}>
			<Header />
			<View style={styles.container}>
				<Text>Hello, World!</Text>
				<StatusBar style="auto" />
				<AppBar />
			</View>
		</PaperProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App;
