// @flow
import firebase from 'react-native-firebase';


export default async (message) => {
    // handle your message

    console.log('aaaaaaaaa');
    const notification = new firebase.notifications.Notification()
  .setNotificationId('background')
  .setTitle(JSON.parse(message._data.title).en)
  .setBody(JSON.parse(message._data.body).en.message)
  .setData({
    key1: 'value1',
    key2: 'value2',
  });
  notification
  .android.setChannelId('channelId')
  .android.setSmallIcon('ic_launcher')
  .android.setBigPicture(JSON.parse(message._data.body).en.imgLink);

  firebase.notifications().displayNotification(notification)

    return Promise.resolve();
}