resource "aws_db_instance" "database" {
  engine           = "mysql"
  instance_class   = var.db_instance_type
  allocated_storage = 20
  storage_type     = "gp2"
  engine_version   = "5.7"
  name             = "example-db"
  username         = var.db_username
  password         = var.db_password
}

resource "aws_security_group" "database" {
  vpc_id = aws_vpc.main.id

  ingress {
    from_port       = 3306
    to_port         = 3306
    protocol        = "tcp"
    security_groups = [aws_security_group.backend.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
