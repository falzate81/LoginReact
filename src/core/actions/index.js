/**
 * Created by lenovo on 01/08/2017.
 */
import { topicsActionsTypes } from './types/topicsActionsTypes';

export function selectArea(u)
{
    return {
        type: topicsActionsTypes.TOPIC_SELECTED,
        payload: u.id
    };

}

export function selectTopic(id)
{
    console.log('topic seleccionado' + id);
}
