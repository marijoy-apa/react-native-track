import { useState, useEffect } from 'react';
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);
    // const [subscriber, setSubscriber] = useState(null)



    useEffect(() => {
        let subscriber;
        console.log('should track', shouldTrack)
        const startWatching = async () => {
            try {
                await requestForegroundPermissionsAsync();
                const subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                },
                    callback
                );
            } catch (error) {
                console.log('handle error')
                setErr(error)
            }
        }
        if (shouldTrack) {
            console.log('start watching is executing')
            startWatching();
        }
        else {
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }
        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        }
    }, [shouldTrack, callback]);

    return [err]
}