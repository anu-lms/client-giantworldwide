const initialState = {
  notifications: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NOTIFICATIONS_RECEIVED': {
      // Get ids of all fetcher notifications.
      const updatedItems = action.notifications.map(item => item.id);

      // Leave only old items that doesn't exists in fetched items.
      const updatedNotifications = state.notifications.filter(item => updatedItems.indexOf(item.id) === -1);

      return {
        ...state,
        // Merge exist notifications and received.
        notifications: [].concat(updatedNotifications, action.notifications),
      };
    }

    case 'NOTIFICATIONS_MARK_AS_READ_IN_STORE': {
      // Search for the notification.
      const index = state.notifications.findIndex(element => element.id === action.notificationId);

      // If the notification was found, then we should update it.
      if (index !== -1) {
        return {
          ...state,
          notifications: [
            ...state.notifications.slice(0, index),
            {
              ...state.notifications[index],
              isRead: true,
            },
            ...state.notifications.slice(index + 1),
          ],
        };
      }

      // Otherwise return unchanged state.
      return state;
    }

    case 'NOTIFICATIONS_MARK_ALL_AS_READ_IN_STORE': {
      const updatedNotifications = state.notifications.map(notification => ({
        ...notification,
        isRead: true,
      }));

      return {
        ...state,
        notifications: updatedNotifications,
      };
    }

    default:
      return state;
  }
};
