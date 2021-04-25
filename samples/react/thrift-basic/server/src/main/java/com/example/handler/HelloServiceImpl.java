package com.example.handler;

import org.apache.thrift.TException;
import org.springframework.stereotype.Component;

import com.example.thrift.THelloService.Iface;

@Component
public class HelloServiceImpl implements Iface {

	@Override
	public String hello(String name) throws TException {
		return "Hello, " + name;
	}

}
