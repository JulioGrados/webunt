import { Input, Comment, Tooltip, List } from 'antd';
import { useComments, useSession } from '../../hooks';
import moment from 'moment';

const { Search } = Input;

const CommentLayout = ({user, result}) => {
    const { loggedUser } = useSession()
    const {list, create} = useComments({user: user && user._id && user._id.toString(), result})
    console.log('list', list)
    const handleComment = async (value) => {
        if(value.trim() !== '') {
            console.log('value', value)
            const formData = new window.FormData()
            formData.append('data', JSON.stringify({
                user: user._id,
                linked: loggedUser._id,
                text: value
            }))
            const resp = await create(formData)
            console.log('resp', resp)
        }
    }

    return (
        <>
            <List
                className="comment-list"
                itemLayout="horizontal"
                dataSource={list}
                renderItem={item => (
                <li>
                    <Comment
                        author={item.user?.names}
                        content={item.text}
                        datetime={moment(item.date).format('YYYY-MM-DD HH:mm:ss')}
                    />
                </li>
                )}
            />
            <Search
                placeholder="Dejar un comentario ..."
                enterButton="Comentar"
                size="large"
                onSearch={value => handleComment(value)}
            />
        </>
    )
}
export default CommentLayout