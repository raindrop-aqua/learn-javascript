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

import com.example.thrift.TCalculatorService;
import com.example.thrift.TOperation;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment=SpringBootTest.WebEnvironment.RANDOM_PORT)
class CalculatorServiceTests {
    @Autowired
    TProtocolFactory protocolFactory;

    @LocalServerPort
    int port;

    TCalculatorService.Client client;

    @BeforeEach
    public void setUp() throws Exception {
        TTransport transport = new THttpClient("http://localhost:" + port + "/calculator");
        TProtocol protocol = protocolFactory.getProtocol(transport);
        this.client = new TCalculatorService.Client(protocol);
    }

    @Test
	void contextLoads() throws TException {
    	 assertThat(client.calculate(2, 3, TOperation.ADD), is(5));
	}
}
