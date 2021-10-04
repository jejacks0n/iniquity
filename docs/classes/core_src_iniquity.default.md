[Iniquity BBS Developer Guide - v1.0.0](../README.md) / [Exports](../modules.md) / [core/src/iniquity](../modules/core_src_iniquity.md) / default

# Class: default

[core/src/iniquity](../modules/core_src_iniquity.md).default

Iniquity BBS

**`global`**

## Table of contents

### Constructors

- [constructor](core_src_iniquity.default.md#constructor)

### Properties

- [basepath](core_src_iniquity.default.md#basepath)
- [name](core_src_iniquity.default.md#name)

### Methods

- [artwork](core_src_iniquity.default.md#artwork)
- [ask](core_src_iniquity.default.md#ask)
- [disconnect](core_src_iniquity.default.md#disconnect)
- [menu](core_src_iniquity.default.md#menu)
- [pause](core_src_iniquity.default.md#pause)
- [print](core_src_iniquity.default.md#print)
- [say](core_src_iniquity.default.md#say)
- [sleep](core_src_iniquity.default.md#sleep)
- [user](core_src_iniquity.default.md#user)

## Constructors

### constructor

• **new default**(`options?`)

Iniquity BBS core class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `IIniquityOptions` | An object containing the various configuration properties. |

#### Defined in

[iniquity.ts:145](https://github.com/iniquitybbs/iniquity/blob/49ab15e/packages/core/src/iniquity.ts#L145)

## Properties

### basepath

• **basepath**: `string`

#### Defined in

[iniquity.ts:137](https://github.com/iniquitybbs/iniquity/blob/49ab15e/packages/core/src/iniquity.ts#L137)

___

### name

• **name**: `string`

#### Defined in

[iniquity.ts:138](https://github.com/iniquitybbs/iniquity/blob/49ab15e/packages/core/src/iniquity.ts#L138)

## Methods

### artwork

▸ **artwork**(`options`): [`Artwork`](core_src_iniquity.Artwork.md)

Will allow you to render artwork to the screen

**`see`** {@link IArtworkOptions}

**`example`**
iq.artwork({ filename: Assets.we_iniq3 })
iq.artwork({ filename: Assets.we_iniq3 }).render({ clearScreenBefore: false })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `IArtworkOptions` | An object containing the various configuration properties. |

#### Returns

[`Artwork`](core_src_iniquity.Artwork.md)

An instance of Artwork and its return functions.

#### Defined in

[iniquity.ts:244](https://github.com/iniquitybbs/iniquity/blob/49ab15e/packages/core/src/iniquity.ts#L244)

___

### ask

▸ **ask**(`question`): `string`

Displays a prompt (value) and returns a string of user input (ala clent-side JS)

#### Parameters

| Name | Type |
| :------ | :------ |
| `question` | `string` |

#### Returns

`string`

response

#### Defined in

[iniquity.ts:213](https://github.com/iniquitybbs/iniquity/blob/49ab15e/packages/core/src/iniquity.ts#L213)

___

### disconnect

▸ **disconnect**(): `void`

Will disconnect the user immediately.

#### Returns

`void`

void

#### Defined in

[iniquity.ts:221](https://github.com/iniquitybbs/iniquity/blob/49ab15e/packages/core/src/iniquity.ts#L221)

___

### menu

▸ **menu**(`options`): `Menu`

Menu instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `IMenuOptions` | An object containing the various configuration properties. |

#### Returns

`Menu`

An instance of Menu

#### Defined in

[iniquity.ts:255](https://github.com/iniquitybbs/iniquity/blob/49ab15e/packages/core/src/iniquity.ts#L255)

___

### pause

▸ **pause**(`options?`): `void`

Pause the cursor

**`see`** {@link IBBSPauseOptions}

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `IBBSPauseOptions` |

#### Returns

`void`

#### Defined in

[iniquity.ts:192](https://github.com/iniquitybbs/iniquity/blob/49ab15e/packages/core/src/iniquity.ts#L192)

___

### print

▸ **print**(`options`): `IBBSPrintFunctions`

Prints something to the user. Parses Renegade MCI/Synchronet @- codes.

**`see`** {@link IBBSPrintOptions}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| `IBBSPrintOptions` | you would like to print on the screen. |

#### Returns

`IBBSPrintFunctions`

#### Defined in

[iniquity.ts:175](https://github.com/iniquitybbs/iniquity/blob/49ab15e/packages/core/src/iniquity.ts#L175)

___

### say

▸ **say**(`options`): `IBBSSayFunctions`

Says something to the user. Does not parse MCI/@- codes.

**`see`** {@link IBBSPrintOptions}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| `IBBSSayOptions` | What you would like to say on the screen. |

#### Returns

`IBBSSayFunctions`

#### Defined in

[iniquity.ts:158](https://github.com/iniquitybbs/iniquity/blob/49ab15e/packages/core/src/iniquity.ts#L158)

___

### sleep

▸ **sleep**(`speed`): `void`

Halt the screen for a specified period of time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `speed` | `number` | In miliseconds |

#### Returns

`void`

void

#### Defined in

[iniquity.ts:204](https://github.com/iniquitybbs/iniquity/blob/49ab15e/packages/core/src/iniquity.ts#L204)

___

### user

▸ **user**(`options`): `User`

Will allow you to work with user data.

**`see`** {@link IUserOptions}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `IUserOptions` | An object containing the various configuration properties. |

#### Returns

`User`

An instance of User and its return functions.

#### Defined in

[iniquity.ts:231](https://github.com/iniquitybbs/iniquity/blob/49ab15e/packages/core/src/iniquity.ts#L231)