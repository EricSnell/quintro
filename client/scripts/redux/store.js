/**
 * Configures the Redux store for use on the browser. Separate from configure-store.js both so
 * that configure-store.js could be used server-side (without a DOM reference) and so that other
 * client-side modules can get a reference to the store if needed.
 */

import $                from "jquery";
import { Map, fromJS }  from "immutable";
import configureStore   from "project/scripts/redux/configure-store";
import UserRecord       from "project/scripts/records/user";
import UsersStateRecord from "project/scripts/records/state/users";

const userData = $(document.body).data("user");

const currentUser = userData ? new UserRecord(fromJS(userData)) : null;

const initialState = Map(
	{
		users: new UsersStateRecord(
			{
				currentID: currentUser && currentUser.id,
				items: currentUser ? Map([[currentUser.id, currentUser]]) : Map()
			}
		)
	}
);

export default configureStore(initialState);
