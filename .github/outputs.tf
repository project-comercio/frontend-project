output "instance_public_ip" {
  value = aws_instance.web_server.public_ip
}

output "load_balancer_dns_name" {
  value = aws_elb.web_lb.dns_name
}
