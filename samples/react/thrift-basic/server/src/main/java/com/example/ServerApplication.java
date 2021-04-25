package com.example;

import org.apache.thrift.protocol.TBinaryProtocol;
import org.apache.thrift.protocol.TProtocolFactory;
import org.apache.thrift.server.TServlet;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.thrift.TCalculatorService;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Bean
	TProtocolFactory protocolFactory() {
		return new TBinaryProtocol.Factory();
	}

	@Bean /* Register Thrift Service */
	TServlet calculator(TCalculatorService.Iface calcService) {
		return new TServlet(new TCalculatorService.Processor<>(calcService), protocolFactory());
	}

//	@Bean /* Register Thrift Service */
//	TServlet hello(THelloService.Iface helloService) {
//		return new TServlet(new THelloService.Processor<>(helloService), protocolFactory());
//	}
}
