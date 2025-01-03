import { useAssets } from 'expo-asset';
import React, { useEffect, useRef, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import WebView from 'react-native-webview';

const Map = (props) => {
    const { onInitialized, onMapPress } = props;

    const [assets] = useAssets([require('../../assets/index.html')]);
    const [htmlString, setHtmlString] = useState();

    const dimensions = useWindowDimensions();

    const webViewRef = useRef(null);

    const zoomToGeoJSON = () => {
        webViewRef.current?.injectJavaScript('window.zoomToGeoJSON(); true');
    };

    useEffect(() => {
        if (assets) {
            fetch(assets[0].localUri || '')
                .then((res) => res.text())
                .then((html) => {
                    setHtmlString(html);
                    onInitialized(zoomToGeoJSON);
                });
        }
    }, [assets]);

    const messageHandler = (e) => {
        const coords = JSON.parse(e.nativeEvent.data);
        onMapPress(coords);
    };

    if (!htmlString) {
        return null;
    }

    return (
        <WebView
            ref={(r) => (webViewRef.current = r)}
            injectedJavaScript=''
            source={{
                html: htmlString,
            }}
            javaScriptEnabled
            style={{
                width: dimensions.width,
                height: dimensions.height,
            }}
            scrollEnabled={false}
            overScrollMode='never'
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            scalesPageToFit={false}
            containerStyle={{ flex: 1 }}
            onMessage={messageHandler}
        />
    );
};

export default Map;
