export enum MonEnum2 {
	enum1, 
	enum2, 
}

export enum MonEnum {
	enum1 = 1, 
	enum2 = 2, 
}

export interface Boo {
	some_field: string;
	my_enum_field: MonEnum;
}

export interface Foo {
	some_field: string;
	another_field: string;
	my_field: boolean;
	my_interface_field: Boo;
}

