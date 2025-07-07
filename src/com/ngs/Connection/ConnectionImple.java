package com.ngs.Connection;

import java.io.InputStream;
import java.util.Properties;

import javax.security.auth.Subject;

import com.filenet.api.core.Connection;
import com.filenet.api.core.Domain;
import com.filenet.api.core.Factory;
import com.filenet.api.core.ObjectStore;
import com.filenet.api.property.PropertyFilter;
import com.filenet.api.util.UserContext;
import com.ngs.FileNetConnection01.Connection01;

public class ConnectionImple implements IConnection{
	private final static Properties ps = new Properties();
	static{
		 try (InputStream input = ConnectionImple.class.getClassLoader().getResourceAsStream("config.properties");) {
          if (input == null) {
              System.out.println("Sorry, unable to find config.properties");
              System.exit(0);
          }
   ps.load(input);
	 }
	 catch (Exception e) {
		e.printStackTrace();
	}
	}
	private final static String ceUrl = ps.getProperty("ceUrl");
	private final static String username = ps.getProperty("username");
	private final static String password = ps.getProperty("password");
//	private final static String objectStore = ps.getProperty("objectstore");
	 
	//Properties for FileNet Connection
	

	@Override
	public Connection getConnection1() {
		
		return Factory.Connection.getConnection(ceUrl);
	}

	@Override
	public Subject getSubject(Connection con) {
		
		return UserContext.createSubject(con, username, password, null);
	}

	@Override
	public UserContext getUserContext() {
		
		return UserContext.get();
	}

	@Override
	public Domain getDomain(Connection con) {
		
		return Factory.Domain.fetchInstance(con, "Fndomain", null);
	}

	@Override
	public ObjectStore getObjectStore(String objectstoreName) {
		
		Connection con = getConnection1();
		Subject subject = getSubject(con);
		UserContext userCon = getUserContext();
		userCon.pushSubject(subject);
		Domain domain = getDomain(con);
		System.out.println("Connection Started");
		return Factory.ObjectStore.fetchInstance(domain, objectstoreName, null);
	}
	

}
