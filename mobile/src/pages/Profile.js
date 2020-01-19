import React from 'react';
import { WebView } from 'react-native-webview';

function Profile( { navigation } ){
	const gitUser = navigation.getParam('github_user');

	return <WebView style={{ flex:1 }} source={{ uri: `https://github.com/${gitUser}` }}/>
}

export default Profile;