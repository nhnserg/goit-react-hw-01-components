import FriendListItem from 'components/FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
            {friends.map((friend) => (
                <FriendListItem key={friend.id} {...friend} />
            ))}
        </ul>
    );
};

export default FriendList;