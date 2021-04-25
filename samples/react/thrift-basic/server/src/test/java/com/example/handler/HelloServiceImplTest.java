package com.example.handler;

import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.Matchers.*;

import org.apache.thrift.TException;
import org.apache.thrift.protocol.TProtocol;
import org.apache.thrift.protocol.TProtocolFactory;
import org.apache.thrift.transport.THttpClient;
import org.apache.thrift.transport.TTransport;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.example.thrift.THelloService;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment=SpringBootTest.WebEnvironment.RANDOM_PORT)
class HelloServiceImplTest {
    @Autowired
    TProtocolFactory protocolFactory;

    @LocalServerPort
    int port;

    THelloService.Client client;

    @BeforeEach
    public void setUp() throws Exception {
        TTransport transport = new THttpClient("http://localhost:" + port + "/hello");
        TProtocol protocol = protocolFactory.getProtocol(transport);
        this.client = new THelloService.Client(protocol);
    }

    @Test
	void contextLoads() throws TException {
    	 assertThat(client.hello("john"), is("Hello, john"));
	}
}
