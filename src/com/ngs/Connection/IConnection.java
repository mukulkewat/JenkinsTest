package com.ngs.Connection;

import javax.security.auth.Subject;

import com.filenet.api.core.Connection;
import com.filenet.api.core.Domain;
import com.filenet.api.core.ObjectStore;
import com.filenet.api.util.UserContext;

public interface IConnection {
	public  Connection getConnection1();
	public Subject getSubject(Connection con);
	public UserContext getUserContext();
	public Domain getDomain(Connection con);
	public ObjectStore getObjectStore(String objectstoreName);

}
